When your program runs, it needs a place to keep the data it is currently working with. That place is **RAM** (Random Access Memory).

## Volatile Storage

RAM is **volatile**: it only holds data while the computer is powered on. When you shut down or the power goes out, everything in RAM is erased. This is different from a hard drive or SSD, which retains data permanently.

## The Desk Analogy

Think of your computer's storage like an office:

- A **hard drive** is the filing cabinet — it holds everything long-term, even when the office is closed.
- **RAM is your desk** — you can only actively work on what is currently spread out in front of you.

When you open a program or load a file, the computer moves it from the filing cabinet to the desk so the CPU can reach it quickly.

## RAM as a Numbered Grid

Here is the structural detail that matters most for this course:

**RAM is a long sequence of boxes. Each box holds exactly one byte and has a unique number — its memory address.**

```
Address:  [ 0 ] [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ] ...
Value:    [ 65] [108] [108] [ 0 ] [ 72] [105] ...
```

Every piece of data your program stores — every variable, every object, every array — lives at one or more of these numbered locations.

The CPU finds data not by searching for it, but by going directly to its address. This is why the name "Random Access Memory" stuck: any address can be accessed in the same amount of time, regardless of where it is. Values larger than one byte span multiple adjacent boxes. The CPU reads them as a single unit starting at the first box's address.