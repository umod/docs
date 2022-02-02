---
hide_table_of_contents: true
---

# OnCollectiblePickup

## Usage

* Called when the player collects an item
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnCollectiblePickup(Item item, BasePlayer player, CollectibleEntity entity)
{
    Puts("OnCollectiblePickup works!");
    return null;
}
```
