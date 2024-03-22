import Api from "../api";

class UserApi {
    private user_api = new Api("virtual")

    async listUser(mail: string, token: any) {
        let data = await this.user_api.get(`/users/?mail=${mail}`, {}, token)

        return data
    }

    async listAddresses() {
        let data = await this.user_api.get(`/users/addresses`, {})

        return data
    }

    async listWallets() {
        let data = await this.user_api.get(`/users/wallets`, {})

        return data
    }

    async listCart() {
        let data = await this.user_api.get(`/users/cart`, {})

        return await data
    }

    async login(mail: string, password: string) {
        return this.user_api.post("/auth", { email: mail, password })
    }

    async createUser(user: UserType) {
        return this.user_api.post("/users", { ...user })
    }

    async createAddress(userId: number, address: AddressType) {
        return this.user_api.post(`/users/addresses/${userId}`, { ...address })
    }

    async createWallet(userId: number, wallet: WalletType) {
        return this.user_api.post(`/users/wallets/${userId}`, { ...wallet })
    }

    async createCart(userId: number, cart: CartType) {
        return this.user_api.post(`/users/cart/${userId}`, { ...cart })
    }

    async updateUser(user: UserType) {
        return this.user_api.put(`/users/${user.id}`, { ...user })
    }

    async updateCart(cart: CartType, valueQuantity: string) {
        return this.user_api.put(`/users/cart/${cart?.id}`, { ...cart, quantity: valueQuantity })
    }

    async deleteCart(cart_id: number) {
        return this.user_api.delete(`/users/cart/${cart_id}`)
    }
}

const userApi = new UserApi()

export default userApi