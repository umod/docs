---
hide_table_of_contents: true
---

# OnMaxStackable

## Usage

* Called when an items max stackable is calculated
* Return a numeric value (int) to override the default value

## Examples

```csharp title=""
int OnMaxStackable(Item item)
{
    Puts("OnMaxStackable works!");
    return 1;
}
```
