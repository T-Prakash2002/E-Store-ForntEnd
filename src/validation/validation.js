import * as yup from 'yup'

export const UserLoginschema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
})
export const UserRegistrationschema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
})

