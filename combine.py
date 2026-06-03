from PIL import Image, ImageDraw, ImageFont

# Load images
try:
    front = Image.open('public/idcard.png').convert('RGBA')
except Exception as e:
    print(f"Error loading idcard.png: {e}")
    exit(1)

try:
    back = Image.open('public/cloud_bg.png').convert('RGBA')
except Exception as e:
    print(f"Error loading cloud_bg.png: {e}")
    exit(1)

# Resize to standard card aspect ratio, e.g., 600x900
card_width, card_height = 600, 900
front = front.resize((card_width, card_height))
back = back.resize((card_width, card_height))

# Create a new image for the combined texture (1200x900)
# The React Bits card.glb maps UV from 0 to 0.5 for the front, and 0.5 to 1.0 for the back.
combined = Image.new('RGBA', (card_width * 2, card_height))

# Paste front onto the left side
combined.paste(front, (0, 0))

# Darken the back image slightly for text contrast
dark_overlay = Image.new('RGBA', back.size, (0, 0, 0, 150))
back = Image.alpha_composite(back, dark_overlay)

# Paste back onto the right side
combined.paste(back, (card_width, 0))

# Draw text on the back
draw = ImageDraw.Draw(combined)

# Try to use a default bold font, fallback to standard
try:
    font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 48)
except:
    font = ImageFont.load_default()

text1 = "UPGRADE YOUR"
text2 = "COMPANY WITH ME."

# Calculate text bounding boxes to center them
# (We are drawing on the right half, so center x is card_width + card_width/2)
center_x = card_width + (card_width // 2)

_, _, w1, h1 = draw.textbbox((0, 0), text1, font=font)
_, _, w2, h2 = draw.textbbox((0, 0), text2, font=font)

draw.text((center_x - w1/2, card_height//2 - 60), text1, fill="#00FFA3", font=font)
draw.text((center_x - w2/2, card_height//2 + 20), text2, fill="#FFFFFF", font=font)

# Save the combined image
combined.save('public/card_combined.png')
print("Successfully generated card_combined.png")
