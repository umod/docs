---
hide_table_of_contents: true
---

# OnContainerDropItems

## Usage

* Called when a container is destroyed and all items are about to be dropped
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnContainerDropItems(ItemContainer container)
{
    Puts("OnContainerDropItems works!");
    return null;
}
```
