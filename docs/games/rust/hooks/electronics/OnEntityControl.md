---
hide_table_of_contents: true
---

# OnEntityControl

## Usage

* Called when a player tries to remote control BaseCombatEntity, IRemoteControllable, or AutoTurret
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? OnEntityControl(IRemoteControllable entity)
{
    Puts("OnEntityControl works!");
    return null;
}
```
