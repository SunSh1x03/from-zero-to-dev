function status(request, response) {
  response.status(200).json({ chave: "Testando status" });
}

export default status;
