export const eError = {
    ROUTING_ERROR:1, 
    DATABASE_ERROR:2, 
    INVALID_JSON:3, 
    AUTH_ERROR:4,
    INVALID_PARAM:5 
};

export const errorDictionary = {
    PRODUCT_CREATION_FAILED: {
        code: 400,
        message: "Error al crear el producto",
    },
    PRODUCT_NOT_FOUND: {
        code: 404,
        message: "Producto no encontrado",
    },
    CART_ADD_FAILED: {
        code: 409,
        message: "Error al agregar el producto al carrito",
    },
};