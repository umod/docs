---
hide_table_of_contents: true
---

# OnFuelConsume

## Usage

* Called right before fuel is used (furnace, lanterns, camp fires, etc.)
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnFuelConsume(BaseOven oven, Item fuel, ItemModBurnable burnable)
{
    Puts("OnFuelConsume works!");
    return null;
}
```
