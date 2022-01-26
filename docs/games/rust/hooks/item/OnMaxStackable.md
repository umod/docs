---
hide_table_of_contents: true
---

# OnMaxStackable

## Usage

* Called when an items max stackable is calculated
* Returning a numeric value (int) overrides the default value

## Examples

```csharp title=""
int OnMaxStackable(Item item)
{
    Puts("OnMaxStackable works!");
    return 1;
}
```
