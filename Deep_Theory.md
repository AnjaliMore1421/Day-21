# Day 21 – Full Real Deep Content 


# 1) CSS Box Model (Deep Understanding)

The **CSS Box Model** defines the structure and spacing of every HTML element.

##  Structure:

Every element is a rectangular box made of:

```
+---------------------------+
|        Margin             |
|  +---------------------+  |
|  |      Border         |  |
|  |  +---------------+  |  |
|  |  |   Padding     |  |  |
|  |  |  +---------+  |  |  |
|  |  |  | Content |  |  |  |
|  |  |  +---------+  |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
```

##  Key Concepts:

* **Content** → Actual data (text, image)
* **Padding** → Space between content and border
* **Border** → Wraps padding/content
* **Margin** → Space between elements

##  Important Rules:

* Default calculation:

  ```
  Total Width = content + padding + border + margin
  ```

* Use:

  ```css
  box-sizing: border-box;
  ```

  → Includes padding & border inside width

* **Margin collapsing**:

  * Vertical margins between elements merge into one

* Padding cannot be negative, margin can

---

# 2️) Display modes: block, inline, inline-block.
The `display` property defines how elements behave in layout.

##  Types:

###  Block

* Takes full width
* Starts on new line
* Supports width/height

Example:

```css
div {
  display: block;
}
```

---

###  Inline

* Takes only content width
* No width/height allowed
* Stays in same line

Example:

```css
span {
  display: inline;
}
```

---

###  Inline-Block

* Behaves like inline
* Supports width/height

Example:

```css
button {
  display: inline-block;
}
```

---


# 3️)Positioning: relative, absolute, sticky, fixed.

Positioning controls exact placement of elements.

##  Types:

### 1. Static (default)

* Normal document flow

---

### 2. Relative

* Moves relative to itself

```css
position: relative;
top: 10px;
```

---

### 3. Absolute

* Positioned relative to nearest **positioned parent**

```css
position: absolute;
top: 0;
left: 0;
```

 If no parent → relative to `body`

---

### 4. Fixed

* Fixed to viewport
* Does not scroll

Example: Navbar

---

### 5. Sticky

* Switches between relative and fixed

```css
position: sticky;
top: 0;
```

---



# 4️) Flexbox Alignment Algorithms

Flexbox is used for **1D layouts** (row OR column).

##  Enable Flex:

```css
display: flex;
```

##  Axes:

* **Main Axis** → Controlled by `flex-direction`
* **Cross Axis** → Perpendicular

---

##  Important Properties:

### Direction:

```css
flex-direction: row | column;
```

### Horizontal Alignment:

```css
justify-content: center | space-between | space-around;
```

### Vertical Alignment:

```css
align-items: center | flex-start | flex-end;
```

### Individual Control:

```css
align-self: center;
```

---

##  Sizing:

```css
flex-grow: 1;
flex-shrink: 1;
flex-basis: auto;
```

---

# 5️) Grid Layout System Fundamentals

Grid is used for **2D layouts** (rows + columns).

##  Enable Grid:

```css
display: grid;
```

---

##  Define Structure:

```css
grid-template-columns: repeat(3, 1fr);
grid-template-rows: auto;
```

---

##  Placement:

```css
grid-column: 1 / 3;
grid-row: 1 / 2;
```

---

##  Important Units:

* `fr` → Fractional space
* `%` → Percentage
* `px` → Fixed

---

##  Useful Functions:

```css
repeat(3, 1fr);
```

---


# 6️) Z-Index & Stacking Context

Controls **layering (which element appears on top)**.

##  Basic Usage:

```css
position: relative;
z-index: 10;
```

---

##  Rules:

* Works only on positioned elements
* Higher value = on top
* Default = `auto`

---

##  Stacking Context Created By:

* `position` + `z-index`
* `opacity < 1`
* `transform`
* `filter`

---

