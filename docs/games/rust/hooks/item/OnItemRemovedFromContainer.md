---
hide_table_of_contents: true
---

# OnItemRemovedFromContainer

## Usage

* Called right after an item was removed from a container
* The entire stack has to be removed for this to be called, not just a little bit
* No return behavior

## Examples

```csharp title=""
void OnItemRemovedFromContainer(ItemContainer container, Item item)
{
    Puts("OnItemRemovedFromContainer works!");
}
```
