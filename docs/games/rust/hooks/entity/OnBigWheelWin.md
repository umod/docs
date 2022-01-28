---
hide_table_of_contents: true
---

# OnBigWheelWin

## Usage

* Called before multiplier is applied.
* Returning non-null value overrides default behavior

## Examples

```csharp title=""
object OnBigWheelWin(BigWheelGame bigWheel, Item scrap, BigWheelBettingTerminal terminal, int multiplier)
{
    Puts("OnBigWheelWin works!");
    return null;
}
```
