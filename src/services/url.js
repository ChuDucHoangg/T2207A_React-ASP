const url = {
    BASE_URL: "https://localhost:7168/api",
    CATEGORY:{
        LIST: "/category",
        CREATE: "/category",
        DETAIL: "/category/get-by-id"
    },
    PRODUCT:{
        LIST: "/product",
        CREATE: "/product",
        DETAIL: "/product/get-by-id",
        CATEGORY_ID: "/product/get-by-category",
    }
}
export default url;