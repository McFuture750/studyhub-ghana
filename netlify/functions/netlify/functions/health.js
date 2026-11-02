exports.handler = async () => ({
  statusCode: 200,
  headers: {
    "content-type": "application/json",
    "cache-control": "no-store"
  },
  body: JSON.stringify({
    ok: true,
    service: "STUDYHUB GHANA",
    message: "Backend functions are deployed. Student accounts and payments are not enabled yet."
  })
});
