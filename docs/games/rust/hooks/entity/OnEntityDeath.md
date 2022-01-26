---
hide_table_of_contents: true
---

# OnEntityDeath

## Usage

* HitInfo might be null, check it before use
* Editing hitInfo has no effect because the death has already happened
* No Return behavior

## Examples

```csharp title=""
void OnEntityDeath(BaseCombatEntity entity, HitInfo info)
{
    Puts("OnEntityDeath works!");
}
```
