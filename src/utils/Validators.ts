const composeValidators = (...validators: Array<(value: string) => any>) => (value: string) => validators.reduce((error, validator) => error || validator(value), undefined);

const required = (value: string | number | Array<string>) => {
    if (!value) {
        return 'Required'
    } else if (Array.isArray(value) && !value.length) {
        return 'Required'
    } else {
        return undefined
    }
}

const email = (value: string) =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		? 'Invalid email address'
		: undefined

export {
    composeValidators,
    required,
    email
}
