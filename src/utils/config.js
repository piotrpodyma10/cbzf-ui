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
  },
}
