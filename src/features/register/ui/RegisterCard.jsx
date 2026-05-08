import { useDispatch, useSelector } from 'react-redux'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import { alpha } from '@mui/material/styles'
import { submitStart, submitSuccess } from '../model/registerSlice'
import { buildRedirectUrl } from '@/shared/lib/redirect'

function selectRegister(state) {
  return state.register
}

export function RegisterCard() {
  const dispatch = useDispatch()
  const { status, error } = useSelector(selectRegister)

  const offerUrl = buildRedirectUrl()

  return (
    <Paper
      elevation={0}
      className="w-full max-w-[460px] border border-white/10"
      sx={{
        backgroundColor: (t) => alpha(t.palette.background.paper, 0.88),
      }}
    >
      <div className="p-5 sm:p-6">
        <div className="space-y-3">
          {status === 'success' && (
            <Alert severity="success">Success! Bonus is ready to claim.</Alert>
          )}
          {status === 'error' && <Alert severity="error">{error}</Alert>}

          <Button
            type="button"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            disabled={status === 'loading'}
            sx={{ borderRadius: 999 }}
            component="a"
            href={offerUrl}
            rel="noreferrer"
            onClick={() => {
              dispatch(submitStart())
              dispatch(submitSuccess())
            }}
          >
            {status === 'loading' ? 'Loading…' : 'Play now'}
          </Button>
        </div>
      </div>
    </Paper>
  )
}

