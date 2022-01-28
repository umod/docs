---
hide_table_of_contents: true
---

# OnFuelConsumed

## Usage

* Called after fuel is used (furnace, lanterns, camp fires, etc.)
* No return behavior

## Examples

```csharp title=""
void OnFuelConsumed(BaseOven oven, Item fuel, ItemModBurnable burnable)
{
    Puts("OnFuelConsumed works!");
}
```
