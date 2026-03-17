export function mountDevelopmentBanner() {
  const banner = document.getElementById("dev-banner");
  if (!banner) return;

  if (process.env.SHOW_DEVELOPMENT_ADVISEMENTS === "true") {
    console.log("Entorno de desarrollo detectado, mostrando banner de aviso.");
    banner.style.display = "block";
  } else {
    banner.style.display = "none";
  }
}
