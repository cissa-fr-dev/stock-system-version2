import React, { useState } from 'react';
import { Box, Button, Card, CardContent, CircularProgress, Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import { mixed, number, object } from 'yup';

const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

export default function ProductForm() {
    return (
        <Card>
            <CardContent>
                <FormikStepper
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        millionaire: false,
                        money: 0,
                        description: ''
                    }} onSubmit={async (values) => {
                        await sleep(3000);
                        console.log('values', values);
                    }}>
                    <FormikStep
                        label="Categorias Gerais"
                    >
                        <Box paddingBottom={2}>
                            <Field
                                name="firstName"
                                component={TextField}
                                label="Firt Name"
                            />
                        </Box>
                        <Box paddingBottom={2}>
                            <Field
                                name="lastName"
                                component={TextField}
                                label="Last Name"
                            />
                        </Box>
                        <Box paddingBottom={2}>
                            <Field
                                name="millionaire"
                                type="checkbox"
                                component={CheckboxWithLabel}
                                Label={{ label: 'I am a millionaire' }}
                            />
                        </Box>
                    </FormikStep>

                    <FormikStep
                        label="Bank Accounts"
                        validationSchema={object({
                            money: mixed().when('millionaire', {
                                is: true,
                                then: number().required().min(1_000_000, 'Because you said you are a millionaire'),
                                otherwise: number().required()
                            })
                        })}>
                        <Box paddingBottom={2}>
                            <Field
                                fullWidth
                                name="money"
                                type="number"
                                component={TextField}
                                label="All the money I have"
                            />
                        </Box>
                    </FormikStep>
                    <FormikStep label="More Info">
                        <Box paddingBottom={2}  >
                            <Field
                                name="description"
                                component={TextField}
                                label="Description"
                            />
                        </Box>
                    </FormikStep>
                </FormikStepper>
            </CardContent>
        </Card >
    );
};

export function FormikStep({ children }) {
    return <>{children}</>
};

export function FormikStepper({ children, ...props }) {
    const childrenArray = React.Children.toArray(children);
    const [step, setStep] = useState(0);
    const currentChild = childrenArray[step];
    const [completed, setCompleted] = useState(false);

    function isLastStep() {
        return step === childrenArray.length - 1;
    };

    return (
        <Formik
            {...props}
            validationSchema={currentChild.props.validationSchema}
            onSubmit={async (value, helpers) => {
                if (isLastStep()) {
                    await props.onSubmit(value, helpers);
                    setCompleted(true);
                    helpers.resetForm();
                    setStep(0);
                } else {
                    setStep(s => s + 1);
                }
            }}>

            {({ isSubmitting }) => (
                <Form autoComplete="off">
                    <Stepper alternativeLabel activeStep={step}>
                        {childrenArray.map((child, index) => (
                            <Step key={child.props.label} completed={step > index || completed}>
                                <StepLabel>{child.props.label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    {currentChild}

                    <Grid container spacing={2}>
                        {step > 0 ? (
                            <Grid item>
                                <Button
                                    disabled={isSubmitting}
                                    variant="contained"
                                    color="primary"
                                    onClick={() => setStep(s => s - 1)}>
                                    Back
                                </Button>
                            </Grid>
                        ) : null}
                        <Grid item>
                            <Button
                                startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                                disabled={isSubmitting}
                                variant="contained"
                                color="primary"
                                type="submit">
                                {isSubmitting ? 'Submmiting' : isLastStep() ? 'Submit' : 'Next'}
                            </Button>
                        </Grid>
                    </Grid>

                </Form>
            )}
        </Formik>
    );
};