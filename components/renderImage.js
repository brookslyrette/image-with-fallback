/**
 * Such evil! This is to get around onError not firing when SSR'ed
 */
const renderImage = (image, fallbackImage) => {
  const onerror = `this.onerror=null;this.src=this.dataset.fallbackImage;`
  return (
    <div dangerouslySetInnerHTML={{
      __html: `<img onError="${onerror}" data-fallback-image=${fallbackImage} src="${image}" />`
    }}>
    </div>
  )
}

export default renderImage
