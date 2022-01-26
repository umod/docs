---
hide_table_of_contents: true
---

# OnItemUse

## Usage

* Called when an item is used
* Returning an int overrides the amount consumed.

## Examples

```csharp title=""
int OnItemUse(Item item, int amountToUse)
{
    Puts("OnItemUse works!");
}
```
