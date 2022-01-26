---
hide_table_of_contents: true
---

# OnFuelConsume

## Usage

* Called right before fuel is used (furnace, lanterns, camp fires, etc.)
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnFuelConsume(BaseOven oven, Item fuel, ItemModBurnable burnable)
{
    Puts("OnFuelConsume works!");
    return null;
}
```
