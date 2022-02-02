---
hide_table_of_contents: true
---

# OnOvenToggle

## Usage

* Called when an oven (Campfire, Furnace,...) is turned on or off
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnOvenToggle(BaseOven oven, BasePlayer player)
{
    Puts("OnOvenToggle works!");
    return null;
}
```
