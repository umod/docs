---
hide_table_of_contents: true
---

# OnBigWheelWin

## Usage

* Called before multiplier is applied.
* Returning non-null value overrides default behaviour.

## Examples

```csharp title=""
object OnBigWheelWin(BigWheelGame bigWheel, Item scrap, int multiplier)
{
    Puts("OnBigWheelWin works!");
    return null;
}
```
