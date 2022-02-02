---
hide_table_of_contents: true
---

# OnBookmarkInput

## Usage

* Called when input is received from a player who is using a computer station with a bookmark selected
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnBookmarkInput(ComputerStation computerStation, BasePlayer player, InputState inputState)
{
    Puts("OnBookmarkInput works!");
    return null;
}
```
