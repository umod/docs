---
hide_table_of_contents: true
---

# OnExplosiveThrown

## Usage

* Called when the player throws an explosive item (C4, grenade, ...)
* No Return behavior

## Examples

```csharp title=""
void OnExplosiveThrown(BasePlayer player, BaseEntity entity, ThrownWeapon item)
{
    Puts("OnExplosiveThrown works!");
}
```
