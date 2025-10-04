from PIL import Image
import io

def scale_image(image_bytes: bytes, scale_factor: float) -> bytes:
    """Scale an image by the given scale factor while maintaining quality."""
    img = Image.open(io.BytesIO(image_bytes))
    new_width = int(img.width * scale_factor)
    new_height = int(img.height * scale_factor)

    # Resize using high-quality resampling
    img_resized = img.resize((new_width, new_height), Image.LANCZOS)

    # Save to bytes
    img_bytes = io.BytesIO()
    img_resized.save(img_bytes, format="PNG", optimize=True)
    img_bytes.seek(0)
    return img_bytes.read()
