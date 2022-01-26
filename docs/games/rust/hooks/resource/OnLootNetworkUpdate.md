---
hide_table_of_contents: true
---

# OnLootNetworkUpdate

## Usage

* Called when a player is trying to loot a container or a container they are looting has changed its contents
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnLootNetworkUpdate(PlayerLoot loot)
{
    Puts("OnLootNetworkUpdate works!");
    return null;
}
```
