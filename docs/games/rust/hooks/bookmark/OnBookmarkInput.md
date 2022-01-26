---
hide_table_of_contents: true
---

# OnBradleyApcInitialize

## Usage

* Called when input is received from a player who is using a computer station with a bookmark selected
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnBookmarkInput(ComputerStation computerStation, BasePlayer player, InputState inputState)
{
    Puts("OnBookmarkInput works!");
    return null;
}
```
