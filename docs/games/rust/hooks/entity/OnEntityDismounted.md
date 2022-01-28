---
hide_table_of_contents: true
---

# OnEntityDismounted

## Usage

* Called when an entity is dismounted by a player
* No return behavior

## Examples

```csharp title=""
void OnEntityDismounted(BaseMountable entity, BasePlayer player)
{
    Puts("OnEntityDismounted works!");
}
```
