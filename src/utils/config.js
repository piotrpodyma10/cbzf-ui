const apiUrl = process.env.REACT_APP_API_URL

export const config = {
  endpoints: {
    provider: `${apiUrl}/cbzf/dostawca`,
    temporaryProvider: `${apiUrl}/cbzf/dostawca_temporary`,
    product: `${apiUrl}/cbzf/produkt`,
    temporaryProduct: `${apiUrl}/cbzf/temporary_produkt`,
    readytoReview: `${apiUrl}/cbzf/ready_for_review`,
    approveProduct: `${apiUrl}/cbzf/approve_product`,
    users: `${apiUrl}/cbzf/get_users`,
    log: `${apiUrl}/cbzf/log`,
    add_user: `${apiUrl}/cbzf/add_user`,
    edit_user: `${apiUrl}/cbzf/edit_user`,
    delete_user: `${apiUrl}/cbzf/delete_user`,
    rate: `${apiUrl}/cbzf/ocena`,
    notApproved: `${apiUrl}/cbzf/get_unverified_suppliers`,
    getNutrition: `${apiUrl}/cbzf/get_nutrition`,
    getPendingNutrition: `${apiUrl}/cbzf/get_temporary_nutrition`,
    getLabel: `${apiUrl}/cbzf/get_label`,
    getIndexes: `${apiUrl}/cbzf/get_indices`,
    getIngredients: `${apiUrl}/cbzf/get_ingredients`,
    addPendingNutrition: `${apiUrl}/cbzf/store_temporary_nutrition`,
    addNutrition: `${apiUrl}/cbzf/store_temporary_nutrition`,
  },
}
