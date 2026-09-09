import os
import cv2
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter, ImageDraw, ImageOps

os.makedirs('public/images/products', exist_ok=True)
os.makedirs('public/images/ingredients', exist_ok=True)

# Load the base bottle crop
base_img = cv2.imread('public/images/products/bottle_raw.png')
if base_img is None:
    # Fallback to sample frame
    base_img = cv2.imread('public/images/products/mobile_sample_150.jpg')
    if base_img is not None:
        h, w = base_img.shape[:2]
        base_img = base_img[int(h*0.2):int(h*0.8), int(w*0.15):int(w*0.85)]

h, w = base_img.shape[:2]

# Let's create an alpha mask for the bottle using thresholding and edge detection
# The bottle in the frame has solid contours and reflections
gray = cv2.cvtColor(base_img, cv2.COLOR_BGR2GRAY)
blurred = cv2.GaussianBlur(gray, (5, 5), 0)

# Create an elliptical/studio vignette mask that isolates the bottle cleanly with soft edges
mask = np.zeros((h, w), dtype=np.uint8)
cv2.ellipse(mask, (w//2, h//2), (int(w*0.42), int(h*0.46)), 0, 0, 360, 255, -1)
mask = cv2.GaussianBlur(mask, (21, 21), 0)

# Product color profiles (B, G, R tint multipliers)
profiles = {
    'ambre-velours': {
        'tint': (0.8, 1.1, 1.35), # Warm golden amber
        'contrast': 1.15,
        'label': 'AMBRE VELOURS'
    },
    'bois-nocturne': {
        'tint': (1.1, 1.0, 0.8), # Deep cypress & smoked birch (cool moody teal-dark)
        'contrast': 1.25,
        'label': 'BOIS NOCTURNE'
    },
    'fleur-de-soie': {
        'tint': (1.2, 1.05, 1.2), # Powdery silk iris & soft champagne
        'contrast': 1.05,
        'label': 'FLEUR DE SOIE'
    },
    'citrus-lumiere': {
        'tint': (0.7, 1.25, 1.4), # Sunlit Calabrian bergamot & neroli
        'contrast': 1.2,
        'label': 'CITRUS LUMIÈRE'
    },
    'rose-minerale': {
        'tint': (1.1, 0.95, 1.25), # Untamed Damask rose & mineral slate
        'contrast': 1.15,
        'label': 'ROSE MINÉRALE'
    },
    'oud-absolu': {
        'tint': (0.6, 0.85, 1.2), # Deep wild agarwood & dark amber honey
        'contrast': 1.35,
        'label': 'OUD ABSOLU'
    }
}

for slug, cfg in profiles.items():
    # Apply tint
    b, g, r = cfg['tint']
    tinted = base_img.astype(np.float32)
    tinted[:, :, 0] = np.clip(tinted[:, :, 0] * b, 0, 255)
    tinted[:, :, 1] = np.clip(tinted[:, :, 1] * g, 0, 255)
    tinted[:, :, 2] = np.clip(tinted[:, :, 2] * r, 0, 255)
    tinted = tinted.astype(np.uint8)

    # Convert to PIL for luxury processing
    pil_img = Image.fromarray(cv2.cvtColor(tinted, cv2.COLOR_BGR2RGB))
    enhancer = ImageEnhance.Contrast(pil_img)
    pil_img = enhancer.enhance(cfg['contrast'])
    
    # Sharpness
    sharpness = ImageEnhance.Sharpness(pil_img)
    pil_img = sharpness.enhance(1.2)

    # Resize to standard bottle presentation dimensions (600x800)
    resized_bottle = pil_img.resize((600, 800), Image.Resampling.LANCZOS)
    
    # Save bottle PNG
    out_bottle_path = f'public/images/products/{slug}-bottle.png'
    resized_bottle.save(out_bottle_path, 'PNG', optimize=True)
    print(f'Saved {out_bottle_path}')

    # Create matching detail image (close-up on nozzle/cap/stopper)
    detail_crop = pil_img.crop((int(pil_img.width*0.15), int(pil_img.height*0.05), int(pil_img.width*0.85), int(pil_img.height*0.65)))
    detail_crop = detail_crop.resize((800, 800), Image.Resampling.LANCZOS)
    out_detail_path = f'public/images/products/{slug}-detail.jpg'
    detail_crop.save(out_detail_path, 'JPEG', quality=90)
    print(f'Saved {out_detail_path}')

# Now generate high quality ingredient story textures and photos
ingredient_defs = {
    'amber-resin': {
        'base_color': (184, 120, 52), # Amber
        'secondary': (235, 175, 90),
        'pattern': 'resin'
    },
    'vetiver-roots': {
        'base_color': (45, 55, 42), # Earthy dark olive vetiver
        'secondary': (110, 115, 80),
        'pattern': 'wood'
    },
    'orris-root': {
        'base_color': (215, 205, 195), # Powdery Florentine Iris
        'secondary': (245, 238, 230),
        'pattern': 'silk'
    },
    'bergamot-harvest': {
        'base_color': (195, 170, 45), # Citrus bergamot
        'secondary': (230, 215, 95),
        'pattern': 'citrus'
    },
    'damask-rose': {
        'base_color': (140, 65, 75), # Deep mineral rose
        'secondary': (210, 140, 155),
        'pattern': 'rose'
    },
    'oud-wood': {
        'base_color': (35, 25, 20), # Smoked agarwood
        'secondary': (115, 75, 45),
        'pattern': 'wood'
    }
}

for name, cfg in ingredient_defs.items():
    w_ing, h_ing = 800, 800
    img_arr = np.zeros((h_ing, w_ing, 3), dtype=np.uint8)
    
    # Create organic gradients and grain
    c1 = np.array(cfg['base_color'], dtype=np.float32)
    c2 = np.array(cfg['secondary'], dtype=np.float32)

    for y in range(h_ing):
        ratio = y / h_ing
        color = c1 * (1 - ratio) + c2 * ratio
        img_arr[y, :] = color

    # Add micro-grain texture
    noise = np.random.normal(0, 12, (h_ing, w_ing, 3))
    noisy = np.clip(img_arr + noise, 0, 255).astype(np.uint8)

    pil_ing = Image.fromarray(noisy)
    pil_ing = pil_ing.filter(ImageFilter.GaussianBlur(1.5))
    
    # Add subtle vignette
    vignette = Image.new('L', (w_ing, h_ing), 0)
    draw = ImageDraw.Draw(vignette)
    draw.ellipse((-100, -100, w_ing+100, h_ing+100), fill=255)
    vignette = vignette.filter(ImageFilter.GaussianBlur(60))
    
    out_ing_path = f'public/images/ingredients/{name}.jpg'
    pil_ing.save(out_ing_path, 'JPEG', quality=92)
    print(f'Saved {out_ing_path}')

print('Asset generation complete!')
