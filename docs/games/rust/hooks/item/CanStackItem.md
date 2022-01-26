---
hide_table_of_contents: true
---

# CanStackItem

## Usage

* Called when moving an item onto another item
* Returning true or false overrides default behavior

## Examples

```csharp title=""
bool CanStackItem(Item item, Item targetItem)
{
    Puts("CanStackItem works!");
    return true;
}
```
