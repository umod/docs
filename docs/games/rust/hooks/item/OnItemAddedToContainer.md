---
hide_table_of_contents: true
---

# OnItemAddedToContainer

## Usage

* Called right after an item was added to a container
* An entire stack has to be created, not just adding more wood to a wood stack for example
* No Return behavior

## Examples

```csharp title=""
void OnItemAddedToContainer(ItemContainer container, Item item)
{
    Puts("OnItemAddedToContainer works!");
}
```
