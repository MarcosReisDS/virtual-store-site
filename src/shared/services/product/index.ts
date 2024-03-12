import Api from "../api";

class ProductApi {
    private product_api = new Api("virtual")

    async listProducts(id?: number) {
        if (id) {
            let data = await this.product_api.get(`/products/?id=${id}`, {})

            return data
        }
        let data = await this.product_api.get("/products", {})

        return data
    }

    async listSizes(id?: number) {
        if (id) {
            let dataSize = await this.product_api.get(`/products/sizes/?id=${id}`, {})

            return dataSize
        }
        let dataSize = await this.product_api.get("/products/sizes", {})

        return dataSize
    }

    async listColors(id?: number) {
        if (id) {
            let dataColor = await this.product_api.get(`/products/colors/?id=${id}`, {})

            return dataColor
        }
        let dataColor = await this.product_api.get("/products/colors", {})

        return dataColor
    }

    async updateProduct(product: ProductType) {
        return this.product_api.put(`/products/${product?.id}`, { ...product })
    }
}
const productApi = new ProductApi()

export default productApi