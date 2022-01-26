---
hide_table_of_contents: true
---

# OnOvenCooked

## Usage

* Called after an oven cooks an item
* No Return behavior

## Examples

```csharp title=""
void OnOvenCooked(BaseOven oven, Item item, BaseEntity slot)
{
    Puts("OnOvenCooked works!");
}
```
