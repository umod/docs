---
hide_table_of_contents: true
---

# OnEntityDismounted

## Usage

* Called when an entity is dismounted by a player
* No Return behavior

## Examples

```csharp title=""
void OnEntityDismounted(BaseMountable entity, BasePlayer player)
{
    Puts("OnEntityDismounted works!");
}
```
