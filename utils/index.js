export const checkImageURL =(URL) => {
    if (!url) return false
    else {
const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
return pattern.test(url);
    }
}