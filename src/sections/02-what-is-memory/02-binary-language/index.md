At the lowest level, a computer is made of billions of tiny switches. Each switch is either **off** or **on** — and those two states are represented as **0** and **1**. This two-value system is called **binary**.

This has been true since the beginning of modern computing. The earliest computers, built in the 1940s, used **vacuum tubes** — glass bulbs the size of a thumb that could be switched on or off electronically. They were expensive, fragile, and generated enormous heat. A room-sized machine might contain 18,000 of them. By the 1950s, vacuum tubes were replaced by **transistors** — smaller, cheaper, and far more reliable. By the 1970s, engineers learned to etch millions of transistors onto a single sliver of silicon, creating the **microchip**. Today, a chip smaller than a fingernail contains billions of transistors.

The physical technology changed dramatically across those decades. What never changed is the underlying paradigm: **every transistor is still just a switch, and every switch is still just a 0 or a 1.** All the software ever written — every app, every database, every algorithm — ultimately runs on that foundation.

## Bits and Bytes

- A **bit** is a single binary digit: a `0` or a `1`.
- A **byte** is a group of 8 bits.

With 8 bits you can represent 256 different combinations (2⁸) — enough to encode a letter, a small number, or a color value.

[Here is a podcast episode that covers this concept](https://www.codenewbie.org/basecs/3)

## Units of Measurement

You will encounter these units constantly throughout this course and your career:

| Unit | Approximate Size |
|------|-----------------|
| **Byte (B)** | 8 bits |
| **Kilobyte (KB)** | 1,000 bytes |
| **Megabyte (MB)** | 1,000,000 bytes |
| **Gigabyte (GB)** | 1,000,000,000 bytes |
| **Terabyte (TB)** | 1,000,000,000,000 bytes |

## Why This Matters

Every value your program works with — a number, a string, an array — is ultimately a pattern of bits stored somewhere in memory. When we talk about how much memory a data structure uses, we are talking about how many of those boxes it occupies.
