import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";
import { Field, Formik } from 'formik';

import AddButton from '../../Common/Buttons/AddButton';
import BackButton from '../../Common/Buttons/BackButton';
import Header from '../../Common/Header';
import Modal from '../../Common/Modal';
import {
    createProductRoute,
    getAllCategoriesRoute,
    createCategoryRoute,
    deleteCategoryByIdRoute,
} from '../../../Api/rotas';

import {
    Content,
    Hr,
    Form,
} from './styles';

import './style.css';

export default function AddProduct() {
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);
    const [newCategory, setNewCategory] = useState("")
    const [categories, setCategories] = useState([]);
    const product = {};

    useEffect(() => {
        getAllCategories();
    }, []);

    async function getAllCategories() {
        await getAllCategoriesRoute()
            .then(res => setCategories(res.data))
            .catch(err => console.log(err));
    };

    async function deleteCategory(id) {
        await deleteCategoryByIdRoute(id)
            .then(() => getAllCategories())
            .catch(err => console.log(err));
    };

    async function createCategory(newCategory) {
        const params = {
            id: uniqueID(),
            name: newCategory,
        };

        await createCategoryRoute(params)
            .then(() => getAllCategories())
            .catch(err => console.log(err));
    };

    async function createProduct(values) {
        const params = {
            id: uniqueID(),
            name: values.name,
            quantity: values.quantity,
            unit_value: values.unit_value,
            category_id: values.category_id
        };

        await createProductRoute(params)
            .then(handleBackToProductsPage())
            .catch(err => console.log(err));
    };

    function uniqueID() {
        return Math.floor(Math.random() * Date.now());
    };

    function handleToggleModal() {
        setIsOpen(!isOpen);
        getAllCategories();
    };

    function handleBackToProductsPage() {
        history.push('/produtos');
    };

    return (
        <>
            <Content>
                <Header title={"Adicionar novo produto"}>
                    <AddButton
                        text={"Adicionar Categoria"}
                        onClick={() => handleToggleModal()}
                    />
                </Header>

                <Hr />

                {isOpen &&
                    <Modal
                        handleToggleModal={handleToggleModal}
                        isOpen={isOpen}
                        newCategory={newCategory}
                        categories={categories}
                        setNewCategory={setNewCategory}
                        deleteCategory={deleteCategory}
                        createCategory={createCategory}
                        getAllCategories={getAllCategories}
                    />
                }

                <BackButton
                    onClick={() => handleBackToProductsPage()}
                />

                <Formik
                    initialValues={product}
                    enableReinitialize
                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = 'Required';
                        } if (!values.unit_value) {
                            errors.unit_value = 'Required';
                        } if (!values.category_id) {
                            errors.category_id = 'Required';
                        } if (!values.quantity) {
                            errors.quantity = 'Required';
                        }
                        return errors;
                    }}

                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(createProduct(values))
                    }}
                >
                    {({
                        values,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <>
                            <Form onSubmit={handleSubmit}>
                                <Field
                                    name="category"
                                    as="select"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    //component={SelectField}
                                    placeholder="Escolha a categoria"
                                >
                                    <option hidden>Escolha</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                </Field>
                                <div>
                                    <div className="row">
                                        <div className="col">
                                            <span>Categoria</span>
                                            <select
                                                type="category_id"
                                                name="category_id"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="Escolha a categoria"
                                            >
                                                <option value="" selected disabled hidden>Escolha uma categoria</option>
                                                {categories && categories.map(item => (
                                                    <option
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col">
                                            <span>Nome</span>
                                            <input
                                                type="name"
                                                name="name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                                placeholder="Nome do produto"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <span>Valor unitário</span>
                                            <input
                                                type="unit_value"
                                                name="unit_value"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.unit_value}
                                                placeholder="R$__,__"
                                            />
                                        </div>
                                        <div className="col">
                                            <span>Quantidade</span>
                                            <input
                                                type="quantity"
                                                name="quantity"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.quantity}
                                                placeholder="Digite a quantidade"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Form>

                            <div className="save-content">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="save-button"
                                    onClick={handleSubmit}
                                >
                                    Salvar produto
                                </button>
                            </div>
                        </>
                    )}
                </Formik>
            </Content>
        </>
    )
}

{/* <div>
<div className="row">
    <div className="col">
        <span>Categoria</span>
        <select
            type="category_id"
            name="category_id"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Escolha a categoria"
        >
            <option value="" selected disabled hidden>Escolha uma categoria</option>
            {categories && categories.map(item => (
                <option
                    key={item.id}
                    value={item.id}
                >
                    {item.name}
                </option>
            ))}
        </select>
    </div>
    <div className="col">
        <span>Nome</span>
        <input
            type="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            placeholder="Nome do produto"
        />
    </div>
</div>
<div className="row">
    <div className="col">
        <span>Valor unitário</span>
        <input
            type="unit_value"
            name="unit_value"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.unit_value}
            placeholder="R$__,__"
        />
    </div>
    <div className="col">
        <span>Quantidade</span>
        <input
            type="quantity"
            name="quantity"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.quantity}
            placeholder="Digite a quantidade"
        />
    </div>
</div>
</div> */}