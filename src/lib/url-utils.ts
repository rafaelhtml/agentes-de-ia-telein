/**
 * Constrói a URL de cadastro com os parâmetros da campanha
 */
export const buildSignupUrl = (): string => {
  const baseUrl = "https://iniciar.telein.com.br/";
  const params = new URLSearchParams({
    event_name: "agenteIA",
    produto: "agenteIA"
  });

  // Captura parâmetros da URL atual
  const currentParams = new URLSearchParams(window.location.search);
  const anuncio = currentParams.get("anuncio");
  const conjuntodeanuncio = currentParams.get("conjuntodeanuncio");
  const campanha = currentParams.get("campanha");

  // Adiciona parâmetros próprios se existirem
  if (anuncio) params.append("anuncio", anuncio);
  if (conjuntodeanuncio) params.append("conjuntodeanuncio", conjuntodeanuncio);
  if (campanha) params.append("campanha", campanha);

  // Encaminha parâmetros de tracking do Google Ads / UTM para a página de cadastro
  const forwardKeys = [
    "gclid",
    "gbraid",
    "wbraid",
    "gad_source",
    "gclsrc",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "utm_id",
  ];
  forwardKeys.forEach((key) => {
    const value = currentParams.get(key);
    if (value) params.append(key, value);
  });

  return `${baseUrl}?${params.toString()}`;
};
