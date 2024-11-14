# Progress Bar Component

This project is a React-based implementation of a **progress bar component** with customizable styling, including gradients, colors, and dynamic features. It is designed to be reusable and visually appealing with smooth animations and advanced styling.

## Features

- **Dynamic Progress Bar**:
    - Increment, decrement, and reset progress using buttons.
    - Smooth animations for progress changes.

- **Customizable Gradients**:
    - Easily change the background and border gradients via props.

- **Energy Image with Stars**:
    - An image element surrounded by star decorations for a visually rich UI.

- **Mountain Visualization**:
    - SVG mountain illustration that grows proportionally to the progress value.
    - Fully customizable colors and gradients.

- **Interactive Plus Button**:
    - A reusable button component with customizable gradient background, border color, and shadow effects.

- **Responsive Design**:
    - Designed to adapt to various container sizes and resolutions.

## Technologies Used

- **React**: Frontend framework for building the interactive UI.
- **CSS**: For styling components with support for gradients, animations, and responsive design.
- **SVG Graphics**: Used for the mountain illustration with dynamic gradient fills.

## How to Use

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/progress-bar-component.git
   cd progress-bar-component
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

### File Structure

- **`ProgressBar.jsx`**:
    - The main progress bar component that handles state and renders the UI.

- **`PlusButton.jsx`**:
    - A reusable button component with customizable styles.

- **`ProgressBar.css`**:
    - Contains all styles for the progress bar and related components.

- **Assets**:
    - `EnergyImage.svg`: Main icon for the energy section.
    - `Shine.svg`, `StarShining.svg`: Decorative star assets for the energy image.

### Customization

#### Progress Bar Wrapper Background
You can change the background of the `progress-bar-wrapper` by editing the `borderGradient` array in the `ProgressBar` component:

```jsx
const borderGradient = ["#CC88B8", "#8B447A"];
```

#### Mountain Gradient
Customize the mountain gradient by modifying the `gradientStartColor` and `gradientEndColor` variables:

```jsx
const gradientStartColor = "#FF4040";
const gradientEndColor = "#1CDEFF";
```

#### Plus Button Styling
Adjust the `PlusButton` component's gradient, border, fill color, and shadow:

```jsx
<PlusButton
  bgColors={["#CFF354", "#FEF394"]}
  borderColor="#FFFF"
  fillColor="#C45F0E"
  boxShadow="0px 4px 0px #5E2450, 0px 7px 31.8px #D491C0"
/>
```

## Future Improvements

- Add accessibility features like ARIA labels.
- Add support for vertical progress bars.
- Provide built-in theme presets for easier customization.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to adjust the content to better suit your needs!