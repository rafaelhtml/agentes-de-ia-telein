/**
 * Constrói a URL de cadastro com os parâmetros da campanha
 */
export const buildSignupUrl = (): string => {
  const baseUrl = "https://iniciar.telein.com.br/";
  const params = new URLSearchParams({
    pixel_id: "1701412423354782",
    conversion_name: "agenteIA",
    produto: "agenteIA"
  });

  // Captura parâmetros da URL atual
  const currentParams = new URLSearchParams(window.location.search);
  const anuncio = currentParams.get("anuncio");
  const conjuntodeanuncio = currentParams.get("conjuntodeanuncio");
  const campanha = currentParams.get("campanha");

  // Adiciona parâmetros se existirem
  if (anuncio) params.append("anuncio", anuncio);
  if (conjuntodeanuncio) params.append("conjuntodeanuncio", conjuntodeanuncio);
  if (campanha) params.append("campanha", campanha);

  return `${baseUrl}?${params.toString()}`;
};
