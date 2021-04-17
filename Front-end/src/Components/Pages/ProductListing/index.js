import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";

import AddButton from '../../Common/Buttons/AddButton';
import TrashButton from '../../Common/Buttons/TrashButton';
import EditButton from '../../Common/Buttons/EditButton';
import Header from '../../Common/Header';
import {
    getAllProductsRoute,
    deleteProductByIdRoute,
} from '../../../Api/rotas';
import {
    Content,
    Hr,
    Table,
    TableContent,
    TableItems,
    TableHead,
    TrTitle,
    TrItems,
    Th,
    Td,
    Actions,
    TableBody,
    Message,
} from './styles';

export default function ProductListing() {
    const history = useHistory();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
    }, []);

    useEffect(() => {
        getProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ProductListing]);

    async function getProducts() {
        await getAllProductsRoute()
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    };

    async function deleteProduct(id) {
        await deleteProductByIdRoute(id)
            .then(() => getProducts())
            .catch(err => console.log(err));
    };

    function handleAddCategoryPage() {
        history.push('/adicionar-produto');
    };

    function handleEditProductPage(id) {
        history.push({ pathname: '/editar-produto', state: id });
    };

    return (
        <Content>
            <Header title={"Produtos no estoque"}>
                <AddButton
                    text={"Adicionar produto"}
                    onClick={() => handleAddCategoryPage()}
                />
            </Header>

            <Hr />

            <Table>
                <TableContent>
                    <TableItems>
                        <TableHead>
                            <TrTitle>
                                <Th>Produto</Th>
                                <Th>Quantidade</Th>
                                <Th>Valor unitário</Th>
                                <Actions>Ações</Actions>
                            </TrTitle>
                        </TableHead>

                        {products.length === 0 || products === undefined ?
                            (
                                <Message>Nenhum produto cadastrado</Message>
                            ) : (
                                <TableBody>
                                    {products.map(item => (
                                        <TrItems key={item.id}>
                                            <Td>{item.name}</Td>
                                            <Td>{item.quantity}</Td>
                                            <Td>R${item.unit_value}</Td>
                                            <Actions>
                                                <TrashButton
                                                    onClick={() => deleteProduct(item.id)}
                                                >
                                                    <FontAwesomeIcon style={{ color: "#a71f1f" }} icon={faTrash} />
                                                </TrashButton>
                                                <EditButton
                                                    onClick={() => handleEditProductPage(item.id)}
                                                >
                                                    <FontAwesomeIcon style={{ color: "#146b4a" }} icon={faEdit} />
                                                </EditButton>
                                            </Actions>
                                        </TrItems>
                                    ))}
                                </TableBody>
                            )}
                    </TableItems>
                </TableContent>
            </Table>
        </Content >
    );
};