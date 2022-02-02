---
hide_table_of_contents: true
---

# OnContainerDropItems

## Usage

* Called when a container is destroyed and all items are about to be dropped
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnContainerDropItems(ItemContainer container)
{
    Puts("OnContainerDropItems works!");
    return null;
}
```
