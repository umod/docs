---
hide_table_of_contents: true
---

# CanHelicopterUseNapalm

## Usage

* Called when a patrol helicopter attempts to use napalm
* Returning true or false overrides default behavior

## Examples

```csharp title=""
bool CanHelicopterUseNapalm(PatrolHelicopterAI heli)
{
    Puts("CanHelicopterUseNapalm works!");
    return true;
}
```
