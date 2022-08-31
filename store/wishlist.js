export const state = () => ({
    wishlist: [{
        "id": 36,
        "name": "NADIA",
        "description": "Naida green dress will breathe new life into your style with its modern shoulder and sleeve design and zippered slit.",
        "status": 1,
        "color": [
            {
                "id": 920,
                "name": "Black Bean",
                "code": "#3d0c02"
            },
            {
                "id": 890,
                "name": "Army Green",
                "code": "#4b5320"
            },
            {
                "id": 870,
                "name": "Alice Blue",
                "code": "#f0f8ff"
            }
        ],
        "size": [
            {
                "id": 32,
                "name": "38"
            },
            {
                "id": 33,
                "name": "40"
            },
            {
                "id": 34,
                "name": "34"
            },
            {
                "id": 35,
                "name": "42"
            },
            {
                "id": 36,
                "name": "44"
            },
            {
                "id": 37,
                "name": "46"
            },
            {
                "id": 38,
                "name": "48"
            },
            {
                "id": 31,
                "name": "36"
            }
        ],
        "min_price": 13.0,
        "image": "http://crmkashefan.com/media/products/nadia-elbise-klasik-duz-elbise-sarar-woman-20183-96-B.jpg",
        "category": {
            "id": 88,
            "name": "Classic Straight dress",
            "slug": "classic-straight-dress"
        },
        "slug": "NADIA",
        "gallery": [
            {
                "id": 135,
                "image": "http://crmkashefan.com/media/gallery_products/nadia-elbise-klasik-duz-elbise-sarar-woman-20212-96-B.jpg"
            },
            {
                "id": 136,
                "image": "http://crmkashefan.com/media/gallery_products/nadia-elbise-klasik-duz-elbise-sarar-woman-20157-96-B.jpg"
            },
            {
                "id": 137,
                "image": "http://crmkashefan.com/media/gallery_products/nadia-elbise-klasik-duz-elbise-sarar-woman-20158-96-B.jpg"
            }
        ],
        "product_type": 2,
        "star": 2
    }, {
        "id": 38,
        "name": "NADIA",
        "description": "Naida green dress will breathe new life into your style with its modern shoulder and sleeve design and zippered slit.",
        "status": 1,
        "color": [
            {
                "id": 920,
                "name": "Black Bean",
                "code": "#3d0c02"
            },
            {
                "id": 890,
                "name": "Army Green",
                "code": "#4b5320"
            },
            {
                "id": 870,
                "name": "Alice Blue",
                "code": "#f0f8ff"
            }
        ],
        "size": [
            {
                "id": 32,
                "name": "38"
            },
            {
                "id": 33,
                "name": "40"
            },
            {
                "id": 34,
                "name": "34"
            },
            {
                "id": 35,
                "name": "42"
            },
            {
                "id": 36,
                "name": "44"
            },
            {
                "id": 37,
                "name": "46"
            },
            {
                "id": 38,
                "name": "48"
            },
            {
                "id": 31,
                "name": "36"
            }
        ],
        "min_price": 13.0,
        "image": "http://crmkashefan.com/media/products/nadia-elbise-klasik-duz-elbise-sarar-woman-20183-96-B.jpg",
        "category": {
            "id": 88,
            "name": "Classic Straight dress",
            "slug": "classic-straight-dress"
        },
        "slug": "NADIA",
        "gallery": [
            {
                "id": 135,
                "image": "http://crmkashefan.com/media/gallery_products/nadia-elbise-klasik-duz-elbise-sarar-woman-20212-96-B.jpg"
            },
            {
                "id": 136,
                "image": "http://crmkashefan.com/media/gallery_products/nadia-elbise-klasik-duz-elbise-sarar-woman-20157-96-B.jpg"
            },
            {
                "id": 137,
                "image": "http://crmkashefan.com/media/gallery_products/nadia-elbise-klasik-duz-elbise-sarar-woman-20158-96-B.jpg"
            }
        ],
        "product_type": 2,
        "star": 2
    }],
});

export const getters = {
};

export const mutations = {
    ADD_PRODUCT_TO_WISHLIST(state, product) {
        const wishlist = [...state.wishlist]
        const wishlistLength = wishlist.filter((wishlist) => wishlist.id === product.id).length

        if (wishlistLength === 0) {
            wishlist.push({ ...product })

            state.wishlist = [...wishlist]

            this.$cookies.set('wishlist', state.wishlist, {
                path: '/',
                maxAge: 60 * 60 * 24 * 7
            })
        }
    },
    REMOVE_PRODUCT_FROM_WISHLIST(state, id) {
        const wishlist = [...state.wishlist]
        const filteredData = wishlist.filter((wishlist) => wishlist.id !== id)

        state.wishlist = [...filteredData]

        this.$cookies.set('wishlist', state.wishlist, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        })
    }
};

export const actions = {
    async addProductToWishlist({ commit }, product) {
        commit('ADD_PRODUCT_TO_WISHLIST', product)
    },
    async removeProductFromWishlist({ commit }, id) {
        commit('REMOVE_PRODUCT_FROM_WISHLIST', id)
    },
};