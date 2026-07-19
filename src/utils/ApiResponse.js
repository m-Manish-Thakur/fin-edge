// ========== Usage ============
// return res.json(
//   new ApiResponse("Transaction created", transaction)
// );
// ================================

class ApiResponse {
  constructor(message, data = null) {
    this.success = true;
    this.message = message;

    if (data !== null) {
      this.data = data;
    }
  }
}

module.exports = ApiResponse;
