---
hide_table_of_contents: true
---

# OnOvenCook

## Usage

* Called before an oven cooks an item
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnOvenCook(BaseOven oven, Item item)
{
    Puts("OnOvenCook works!");
    return null;
}
```
