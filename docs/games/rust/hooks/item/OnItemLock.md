---
hide_table_of_contents: true
---

# OnItemLock

## Usage

* Called right before an item is locked, such as in a modular car inventory
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnItemLock(Item item)
{
    Puts("OnItemLock works!");
    return null;
}
```
